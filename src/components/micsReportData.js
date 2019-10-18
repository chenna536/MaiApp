const micsData = {
  statusCode: 201,
  data: [
    {
      cardType: 'ASSESSMENT_RESULT_HEADER',
      title: 'Learning Genius',
      icon: 'https://s3.ap-south-1.amazonaws.com/dev-mai-cms/track/icons/42.png',
      bgColor: '#22a6f9',
    },
    {
      cardType: 'ASSESSMENT_VIDEO',
      title: 'How to read this report',
      url: 'https://www.youtube.com/watch?v=nfHXOet2Sps',
      coverImageURL: 'https://s3.ap-south-1.amazonaws.com/mai-cms/videos/video_1.jpg',
    },
    {
      cardType: 'TITLE_DESCRIPTION',
      titleColor: '#a159af',
      title: 'Multiple Intelligences and Learning Styles',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      cardType: 'TITLE_BULLETS',
      title: 'In this report you will find',
      icon: '',
      bulletItems: [
        {
          text: 'Best methods & ways for your child to learn things',
          icon: '',
          color: '',
        },
        {
          text: 'Methods to avoid v teaching your child',
          icon: '',
          color: '',
        },
      ],
    },
    {
      cardType: 'ASSESSMENT_SCORE_BLOCK',
      title: 'HIGH',
      titleColor: '#a159af',
      subTitle: 'Preference Learning Style',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      scoreBlocks: [
        {
          _id: '5d427856b0f39c4614c7b743',
          title: 'Interpersonal Intelligence',
          progress: 53.13,
          progressText: '53.13%',
        },
        {
          _id: '5d427856b0f39c4614c7b742',
          title: 'Logical-mathematical Intelligence',
          progress: 56.88,
          progressText: '56.88%',
        },
        {
          _id: '5d427856b0f39c4614c7b746',
          title: 'Musical Intelligence',
          progress: 55,
          progressText: '55%',
        },
      ],
    },
    {
      cardType: 'ASSESSMENT_SCORE_BLOCK',
      title: 'Average Preference Learnig Style',
      titleColor: '#a159af',
      subTitle: 'Preference Learning Style',
      scoreBlocks: [
        {
          _id: '5d427856b0f39c4614c7b741',
          title: 'Visual-spatial Intelligence',
          progress: 47.5,
          progressText: '47.5%',
        },
        {
          _id: '5d427856b0f39c4614c7b744',
          title: 'Intrapersonal Intelligence',
          progress: 51.67,
          progressText: '51.67%',
        },
        {
          _id: '5d427856b0f39c4614c7b747',
          title: 'Linguistic Intelligence',
          progress: 48.08,
          progressText: '48.08%',
        },
      ],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      cardType: 'ASSESSMENT_SCORE_BLOCK',
      title: 'Low Preference Learnig Style',
      titleColor: '#a159af',
      subTitle: 'Preference Learning Style',
      scoreBlocks: [
        {
          _id: '5d427856b0f39c4614c7b745',
          title: 'Bodily-kinesthetic Intelligence',
          progress: 37.86,
          progressText: '37.86%',
        },
      ],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      cardType: 'ASSESSMENT_HOBBY',
      title: 'Suitable Hobbies/Activities for Abc dd to ',
      titleColor: '#55c58d',
      infoIcon: 'https://cdn4.iconfinder.com/data/icons/meBaze-Freebies/512/info.png',
      infoText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      subTitle: 'EXCEL',
      recommendations: [
        {
          title: 'Music Instrument',
          _id: '5d7883513866b9dcea2a5206',
          buttonLabel: 'Talk to coach',
          icon: '',
          buttonColor: '#22a6f9',
          services: [
            {
              name: 'Keyboard',
              _id: '5d78835325501f883cf1ac72',
            },
            {
              name: 'Piano',
              _id: '5d78835325501f883cf1ac73',
            },
            {
              name: 'Casio',
              _id: '5d78835325501f883cf1ac74',
            },
          ],
        },
        {
          title: 'Percussion Instruments',
          _id: '5d788351ce01557e8f2cd336',
          buttonLabel: 'Talk to coach',
          icon: '',
          buttonColor: '#22a6f9',
          services: [
            {
              name: 'Drums',
              _id: '5d78835325501f883cf1ac6c',
            },
            {
              name: 'Tabla',
              _id: '5d78835325501f883cf1ac6d',
            },
            {
              name: 'Mridangam',
              _id: '5d78835325501f883cf1ac6e',
            },
          ],
        },
        {
          title: 'Indian Classical Dance',
          _id: '5d788351ce01557e8f2cd331',
          buttonLabel: 'Talk to coach',
          icon: '',
          buttonColor: '#22a6f9',
          services: [
            {
              name: 'Bharatnatyam',
              _id: '5d78835325501f883cf1ac58',
            },
            {
              name: 'Kuchipudi',
              _id: '5d78835325501f883cf1ac59',
            },
            {
              name: 'Mohiniattam',
              _id: '5d78835325501f883cf1ac5a',
            },
            {
              name: 'Kathak',
              _id: '5d78835325501f883cf1ac5b',
            },
            {
              name: 'Odissi',
              _id: '5d78835325501f883cf1ac5c',
            },
          ],
        },
      ],
    },
    {
      cardType: 'ASSESSMENT_HOBBY',
      title: 'Suitable Hobbies/Activities for Abc dd to ',
      titleColor: '#55c58d',
      infoIcon: 'https://cdn4.iconfinder.com/data/icons/meBaze-Freebies/512/info.png',
      infoText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      subTitle: 'GROW',
      recommendations: [
        {
          title: 'Dance',
          _id: '5d7883513866b9dcea2a5204',
          buttonLabel: 'Talk to coach',
          icon: '',
          buttonColor: '#22a6f9',
          services: [
            {
              name: 'Freestyle Dance',
              _id: '5d78835325501f883cf1ac60',
            },
            {
              name: 'Bollywood Dance',
              _id: '5d78835325501f883cf1ac61',
            },
            {
              name: 'Indian Contemporary',
              _id: '5d78835325501f883cf1ac62',
            },
          ],
        },
        {
          title: 'Drawing & Painting',
          _id: '5d78835325501f883cf1ac81',
          buttonLabel: 'Talk to coach',
          icon: '',
          buttonColor: '#22a6f9',
        },
        {
          title: 'Rubik Cube',
          _id: '5d78835325501f883cf1ac85',
          buttonLabel: 'Talk to coach',
          icon: '',
          buttonColor: '#22a6f9',
        },
      ],
    },
    {
      cardType: 'ASSESSMENT_HOBBY',
      title: 'Suitable Hobbies/Activities for Abc dd to ',
      titleColor: '#55c58d',
      infoIcon: 'https://cdn4.iconfinder.com/data/icons/meBaze-Freebies/512/info.png',
      infoText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      subTitle: 'Address Focus Area',
      recommendations: [
        {
          title: 'String Instruments',
          _id: '5d788351ce01557e8f2cd335',
          buttonLabel: 'Talk to coach',
          icon: '',
          buttonColor: '#22a6f9',
          services: [
            {
              name: 'Guitar',
              _id: '5d78835325501f883cf1ac68',
            },
            {
              name: 'Sitar',
              _id: '5d78835325501f883cf1ac69',
            },
            {
              name: 'Violin',
              _id: '5d78835325501f883cf1ac6a',
            },
            {
              name: 'Veena',
              _id: '5d78835325501f883cf1ac6b',
            },
          ],
        },
        {
          title: 'Gymnastics',
          _id: '5d78835325501f883cf1ac77',
          buttonLabel: 'Talk to coach',
          icon: '',
          buttonColor: '#22a6f9',
        },
        {
          title: 'Clay Modelling',
          _id: '5d78835325501f883cf1ac8f',
          buttonLabel: 'Talk to coach',
          icon: '',
          buttonColor: '#22a6f9',
        },
      ],
    },
  ],
  error: {},
};

export default micsData;
