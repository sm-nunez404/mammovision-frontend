interface DetailRowProps {
    label: string;
    value: string | number;
    className?: string;
  }
  
  export function DetailRow({ label, value, className = '' }: DetailRowProps) {
    return (
      <div className={`flex justify-between items-center py-2 ${className}`}>
        <span className="text-[#021526]/70 font-medium">{label}</span>
        <span className="text-[#021526]">{value}</span>
      </div>
    );
  }