"use client";

import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import LoadingDots from '@/components/common/LoadingDots';
import { useParams } from 'next/navigation';
import clsx from 'clsx';

// Initialize Firebase (make sure to replace the config object with your Firebase project config)
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Check if Firebase is not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

type ViewCounterProps = {
  slug?: string | string[];
  trackView?: boolean;
};

export default function ViewCounter({
  slug,
  trackView = true,
}: ViewCounterProps) {
  const { slug: paramsSlug } = useParams() || {};
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const viewsRef = firebase.firestore().doc(`views/${slug || paramsSlug}`);

    const onValueChange = (snapshot: firebase.firestore.DocumentSnapshot) => {
      const count = snapshot.data()?.total || 0;
      setViews(count);
    };
    console.log('viewsRef', viewsRef);  
    const unsubscribe = viewsRef.onSnapshot(onValueChange);

    return () => {
      unsubscribe(); // Unsubscribe from the snapshot listener when the component unmounts
    };
  }, [slug, paramsSlug]);

  useEffect(() => {
    const postView = async () => {
      try {
        if (trackView && slug) {
          const viewsRef = firebase.firestore().doc(`views/${slug}`);
          await firebase.firestore().runTransaction(async (transaction) => {
            const doc = await transaction.get(viewsRef);
            const currentViews = doc.data()?.total || 0;
            transaction.update(viewsRef, { total: currentViews + 1 });
          });
        }
      } catch (error) {
        console.error('Error posting view:', error);
      }
    };

    postView();
  }, [slug, trackView]);

  if (views === null) {
    return <LoadingDots />;
  }

  const textStyle = clsx({
    'text-lg sm:text-xl font-semibold': !paramsSlug,
    'text-base text-slate-600 font-normal dark:text-slate-400': paramsSlug,
  });

  return <span className={textStyle}>{views.toLocaleString()} views</span>;
}