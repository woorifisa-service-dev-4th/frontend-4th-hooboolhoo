"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Comments from "@/app/components/Comments";
import VsButton from "@/app/components/ui/VsButton";

export default function Layout({ children }) {
    const searchParams = useSearchParams();
    const src = searchParams.get("src"); 
    const title = searchParams.get("title");
    const [leftText, rightText] = title.split(" vs ").map(text => text.trim()); 

    return (
        <section className="flex flex-col p-6">
            <div className="text-2xl font-bold items-center text-center mb-3">
                {title}
            </div>

            {/* 이미지 섹션 */}
            <div className="relative w-full h-[320px] mb-6">
                <Image 
                    src={src} 
                    alt="선택한 결과" 
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>

            {/* 버튼 섹션 */}
            <div className="flex justify-center gap-20">
                <VsButton 
                    choice="left" 
                    text={leftText} 
                    size={{ fontSize: "20px", px: "60px", py: "30px" }} 
                />
                <VsButton 
                    choice="right" 
                    text={rightText} 
                    size={{ fontSize: "20px", px: "60px", py: "30px" }}  
                />
            </div>

            {/* 댓글 섹션 */}
            <div className="mt-10">
                <div className="text-xl">선택 후 댓글을 남겨보세요</div>
                <div className="comment-section">
                    <Comments choice="right" text={`당연히 ${rightText}지!`} />
                    <Comments choice="left" text={`당연히 ${leftText}지!`} />
                </div>
            </div>

            {children}
        </section>
    );
}
