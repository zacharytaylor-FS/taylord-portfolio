export default function ProjectLayout({ children }) {
  return (
    <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
      <div className='inline-block max-w-72 lg:max-w-4xl text-center justify-center'>
        {children}
      </div>
    </section>
  );
}
