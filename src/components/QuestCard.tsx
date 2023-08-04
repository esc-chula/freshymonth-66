interface QuestCardProps {}

export default function QuestCard({}: QuestCardProps) {
    return (
        <div className="bg-[#E9DDC7] aspect-[9/14] rounded-xl shadow-xl p-1.5 cursor-pointer">
            <div className="w-full h-full rounded-lg border-[#8C7D6A]/70 border-[3px]"></div>
        </div>
    );
}
