export default function Projects() {
  const projects = [
    {
      title: '프로젝트 1',
      description: '프로젝트에 대한 간단한 설명을 작성합니다.',
      image: '/project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: '프로젝트 2',
      description: '프로젝트에 대한 간단한 설명을 작성합니다.',
      image: '/project2.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: '프로젝트 3',
      description: '프로젝트에 대한 간단한 설명을 작성합니다.',
      image: '/project3.jpg',
      technologies: ['React', 'Firebase', 'Material-UI'],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 