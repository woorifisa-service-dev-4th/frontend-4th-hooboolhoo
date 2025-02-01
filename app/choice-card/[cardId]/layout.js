import Image from "next/image";
import Comments from "@/app/components/Comments";
import VsButton from "@/app/components/ui/VsButton";

export default function Layout({ children }) {
    return (
        <section className="flex flex-col p-6">
            <div className="text-2xl font-bold items-center text-center mb-3">
                당신이 선택한 최애는?
            </div>

            <div className="relative w-full h-[320px] mb-6">
                <Image 
                    src="/images/test.jpg" 
                    alt="선택한 결과" 
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>

            {/* 버튼 */}
            <div className="flex justify-center gap-20">
                <VsButton 
                    choice="left" 
                    text="카리나" 
                    size={{ fontSize: "20px", px: "60px", py: "30px" }} 
                />
                <VsButton 
                    choice="right" 
                    text="윈터" 
                    size={{ fontSize: "20px", px: "60px", py: "30px" }} 
                />
            </div>

            {/* 댓글 섹션 */}
            <div className="mt-10">
                <div className="text-xl">
                    선택 후 댓글을 남겨보세요
                </div>
                <div className="comment-section">  {/* 이 부분에 별도의 스타일 추가 */}
                    <Comments choice="right" text="내 최애는 당연히 카리나지!" />
                    <Comments choice="left" text="내 최애는 당연히 윈터지!" />
                    <Comments choice="right" text="내 최애는 당연히 카리나지!" />
                    <Comments choice="left" text="내 최애는 당연히 윈터지!" />
                </div>
            </div>

            {children}
        </section>
    );
}
