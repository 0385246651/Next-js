'use client'
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface IButton {
    id: number
    text: string;
    url: string;
    newTab?: boolean;
    BackgroundColor?: string;
    BorderColor?: string;
    type?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
}

export function ButtonLink({ text, url, newTab, type, BackgroundColor, BorderColor }: IButton) {
    const linkProps = newTab
        ? {
            target: "_blank",
            rel: "noopener noreferrer",
        }
        : {};
    return (
        <Link href={url}>
            <Button {...linkProps}
                variant={type}
                className={BorderColor ? `${BorderColor} border-solid border border-[#7A7A7A] rounded-[30px] inline-flex w-auto`
                    : ' rounded-[30px] inline-flex w-auto'}
                style={{ backgroundColor: BackgroundColor }}
            >
                <span className="text-black">{text}</span>
            </Button>
        </Link >
    );
}
