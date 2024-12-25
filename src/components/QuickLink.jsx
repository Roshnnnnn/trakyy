function QuickLink({ title, subtitle, icon, badge }) {
  return (
    <div className="flex flex-col items-center w-20">
      <div className="relative">
        {badge && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[8px] px-1.5 py-0.5 rounded-full font-medium whitespace-nowrap z-10">
            {badge}
          </div>
        )}
        <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-2xl">
          {icon}
        </div>
      </div>
      <div className="mt-1 text-center">
        <p className="text-white text-xs font-medium">{title}</p>
        <p className="text-gray-300 text-[10px]">{subtitle}</p>
      </div>
    </div>
  )
}

export default QuickLink
