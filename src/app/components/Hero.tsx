import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="text-center">
        <div className="relative w-48 h-48 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white">
            <Image
              src="/images/profile.png"
              alt="프로필 사진"
              width={192}
              height={192}
              className="object-cover"
              priority
              quality={100}
            />
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-4">안녕하세요, '윤 프로'입니다</h1>
        <p className="text-xl mb-8">(주) 리얼넥스트 솔루션 대표이사</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
          프로젝트 보기
        </button>
      </div>
    </section>
  )
} 