// 손금 이미지 해석
document.getElementById('imageInput').addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (event) {
    const img = new Image();
    img.onload = function () {
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      document.getElementById('palmResult').innerText =
        '손금이 깊고 선명합니다. 강한 의지와 리더십이 돋보이는 타입이에요.';
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
});

// 사주 & 오늘의 운세
function analyzeFortune() {
  const birthDate = document.getElementById('birthDate').value;
  const birthTime = document.getElementById('birthTime').value;

  if (!birthDate || !birthTime) {
    document.getElementById('fortuneResult').innerText = '생년월일시를 모두 입력해주세요.';
    return;
  }

  const birth = new Date(`${birthDate}T${birthTime}`);
  const hour = birth.getHours();

  let personality = '';
  if (hour >= 5 && hour < 7) {
    personality = '새벽에 태어난 당신은 직관력이 뛰어나고 예술적 감성이 풍부한 타입입니다.';
  } else if (hour >= 11 && hour < 13) {
    personality = '정오에 태어난 당신은 리더십과 추진력이 강하며, 사람들을 이끄는 능력이 탁월합니다.';
  } else if (hour >= 19 && hour < 21) {
    personality = '저녁에 태어난 당신은 내면이 깊고 감정이 풍부하며, 신중한 결정을 잘 내립니다.';
  } else {
    personality = '당신은 균형 잡힌 성향으로, 상황에 따라 유연하게 대처하는 능력이 뛰어납니다.';
  }

  const today = new Date();
  const day = today.getDay();

  const dailyFortune = [
    '🌞 새로운 시작에 좋은 날입니다. 작은 도전이 큰 기회로 이어질 수 있어요.',
    '🌱 주변 사람들과의 관계에 집중하세요. 대화 속에서 힌트를 얻을 수 있습니다.',
    '🔥 열정이 넘치는 하루! 하고 싶은 일을 망설이지 말고 시작해보세요.',
    '💧 감정 기복이 있을 수 있으니, 차분함을 유지하는 것이 중요합니다.',
    '🌈 좋은 소식이 들려올 수 있어요. 열린 마음으로 받아들이세요.',
    '🌿 휴식이 필요한 날입니다. 자신을 위한 시간을 가져보세요.',
    '🌟 직관이 빛나는 날! 평소와 다른 선택이 행운을 가져올 수 있어요.'
  ];

  const advice = [
    '🍵 따뜻한 차 한 잔으로 마음을 다스려보세요.',
    '📖 책 한 권을 읽으며 내면을 채워보는 것도 좋아요.',
    '🚶‍♂️ 가벼운 산책이 생각을 정리하는 데 도움이 됩니다.',
    '📝 오늘 떠오른 아이디어는 꼭 메모해두세요.',
    '🎧 음악으로 기분을 전환해보세요.',
    '💬 친구와의 대화가 큰 위로가 될 수 있어요.',
    '🧘‍♀️ 명상이나 호흡으로 마음의 균형을 잡아보세요.'
  ];

  const resultText = `
    🌟 사주 성향:
    ${personality}

    🍀 오늘의 운세:
    ${dailyFortune[day]}

    💡 오늘의 조언:
    ${advice[day]}
  `;

  document.getElementById('fortuneResult').innerText = resultText;
}