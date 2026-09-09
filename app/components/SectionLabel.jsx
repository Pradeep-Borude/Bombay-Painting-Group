export default function SectionLabel({ children }) {
  return (
    <div className="flex text-xl font-medium tracking-[0.02em]">
  <span className="font-bold section-dot mr-2 flex items-center leading-none">
    •
  </span>
  {children}
</div>
  );
}