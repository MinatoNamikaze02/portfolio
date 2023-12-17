type BrandLogoProps = {
  height: string;
  width: string;
};

import Logo from '/public/images/logo.png';

export default function BrandLogo({ height, width }: BrandLogoProps) {
  return (
    <img src={Logo.src} alt="Vishwanath B." height={height} width={width} />
  );
}
