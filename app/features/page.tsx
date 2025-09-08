
import Link from 'next/link';

export default function FeaturesPage() {
  const features = [
    { slug: 'ai-powered', title: 'AI Powered Features', description: 'Advanced AI capabilities' },
    { slug: 'analytics', title: 'Analytics Dashboard', description: 'Comprehensive analytics' },
    { slug: 'collaboration', title: 'Team Collaboration', description: 'Enhanced team collaboration tools' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Features
          </h1>
          <p className="text-lg text-gray-600">
            Explore the powerful features that make our platform stand out.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Link
              key={feature.slug}
              href={`/features/${feature.slug}`}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h2>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
