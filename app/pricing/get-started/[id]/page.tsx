interface Params {
  params: Promise<{ id: string }>;
}

export default async function PricingGetStarted({ params }: Params) {
  const { id } = await params;
  
  return (
    <main className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center p-8 rounded-2xl border border-gray-200 shadow-sm">
        <h1 className="text-3xl font-bold mb-2">
          Get Started - Plan {id}
        </h1>
        <p className="text-gray-600">Coming soon</p>
      </div>
    </main>
  );
}
