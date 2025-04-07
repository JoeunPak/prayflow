import Head from 'next/head'
import { useState } from 'react'

const situations = {
  '불안할 때': {
    verse: '빌립보서 4:6-7',
    text: '아무것도 염려하지 말고 다만 모든 일에 기도와 간구로 너희 구할 것을 감사함으로 하나님께 아뢰라',
  },
  '두려울 때': {
    verse: '이사야 41:10',
    text: '두려워하지 말라 내가 너와 함께 함이라 놀라지 말라 나는 네 하나님이 됨이라',
  },
  '외로울 때': {
    verse: '시편 27:10',
    text: '내 부모는 나를 버렸으나 여호와는 나를 영접하시리이다',
  }
}

export default function Home() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-6">
      <Head>
        <title>PrayFlow</title>
      </Head>

      {!selected && (
        <>
          <h1 className="text-3xl font-bold text-blue-800 mb-6">오늘, 어떤 마음이신가요?</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {Object.keys(situations).map((key) => (
              <button
                key={key}
                onClick={() => setSelected(key)}
                className="bg-white border border-blue-200 px-6 py-4 rounded-xl shadow text-blue-700 hover:bg-blue-100"
              >
                {key}
              </button>
            ))}
          </div>
        </>
      )}

      {selected && (
        <div className="bg-white rounded-xl shadow p-6 max-w-xl text-center">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">{situations[selected].verse}</h2>
          <p className="text-gray-700 mb-4">"{situations[selected].text}"</p>
          <div className="bg-blue-50 p-4 rounded-md text-gray-700 italic mb-4">
            하나님, {selected} 제 마음을 주님 앞에 내려놓습니다. 말씀의 위로와 평안을 부어주세요. 예수님의 이름으로 기도드립니다. 아멘.
          </div>
          <button
            onClick={() => setSelected(null)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            🔁 다시 선택하기
          </button>
        </div>
      )}
    </div>
  )
}
