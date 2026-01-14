import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTAButtonsProps {
    primaryText?: string;
    primaryHref?: string;
    secondaryText?: string;
    secondaryHref?: string;
    className?: string;
}

export default function CTAButtons({
    primaryText = "Start for $10",
    primaryHref = "/classes",
    secondaryText = "View Schedule",
    secondaryHref = "/schedule",
    className = "",
}: CTAButtonsProps) {
    return (
        <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
            <Link
                href={primaryHref}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#8A6CD9] text-white font-semibold rounded-full btn-glow hover:bg-[#7B5DC8] transition-all group"
            >
                {primaryText}
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#1E1E1E] text-white font-semibold rounded-full border border-white/10 hover:bg-[#2a2a2a] hover:border-white/20 transition-all"
            >
                {secondaryText}
            </Link>
        </div>
    );
}

// Primary button only variant
export function PrimaryButton({
    text = "Get Started",
    href = "/classes",
    className = "",
    size = "default",
}: {
    text?: string;
    href?: string;
    className?: string;
    size?: "small" | "default" | "large";
}) {
    const sizeClasses = {
        small: "px-5 py-2 text-sm",
        default: "px-6 py-3",
        large: "px-8 py-4 text-lg",
    };

    return (
        <Link
            href={href}
            className={`inline-flex items-center justify-center ${sizeClasses[size]} bg-[#8A6CD9] text-white font-semibold rounded-full btn-glow hover:bg-[#7B5DC8] transition-all group ${className}`}
        >
            {text}
            <ArrowRight size={size === "small" ? 14 : 18} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
    );
}

// Secondary button only variant
export function SecondaryButton({
    text = "Learn More",
    href = "#",
    className = "",
}: {
    text?: string;
    href?: string;
    className?: string;
}) {
    return (
        <Link
            href={href}
            className={`inline-flex items-center justify-center px-6 py-3 bg-[#1E1E1E] text-white font-medium rounded-full border border-white/10 hover:bg-[#2a2a2a] hover:border-white/20 transition-all ${className}`}
        >
            {text}
        </Link>
    );
}

// Ghost button variant
export function GhostButton({
    text = "Member Login",
    href = "#",
    className = "",
}: {
    text?: string;
    href?: string;
    className?: string;
}) {
    return (
        <Link
            href={href}
            className={`inline-flex items-center justify-center px-5 py-2 border border-white/30 text-white rounded-full hover:bg-white/10 transition-all font-medium ${className}`}
        >
            {text}
        </Link>
    );
}
