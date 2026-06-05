import type { ComponentType, SVGProps } from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import type { SocialIcon as SocialIconName } from "@/content/profile";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const MAP: Record<SocialIconName, IconComponent> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: Mail,
};

interface SocialIconProps {
  name: SocialIconName;
  className?: string;
}

export function SocialIcon({ name, className }: SocialIconProps) {
  const Icon = MAP[name];
  return <Icon className={className} aria-hidden />;
}
