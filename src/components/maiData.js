const maiData = {
  statusCode: 201,
  data: [
    {
      cardType: 'TITLE_DESCRIPTION',
      titleColor: '#a159af',
      title: 'What is Logical and Mathematical style of learning',
      icon: 'https://s3.ap-south-1.amazonaws.com/mai-cms/icons/icon_emotional.png',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      description_color: '#22a6f9',
    },
    {
      cardType: 'TITLE_BULLETS',
      title: 'In this report you will find',
      icon: 'https://s3.ap-south-1.amazonaws.com/mai-cms/icons/icon_emotional.png',
      bulletItems: [
        {
          text: 'Kids with this style, learn best by-',
          icon: 'https://s3.ap-south-1.amazonaws.com/mai-cms/icons/icon_emotional.png',
          color: '',
        },
        {
          text: 'Kids with this style, learn best by-',
          icon: 'https://s3.ap-south-1.amazonaws.com/mai-cms/icons/icon_emotional.png',
          color: '',
        },
      ],
    },
    {
      cardType: 'ASSESSMENT_RESULT_HEADER',
      title: 'Learning Genius Report',
      subTitle: 'What is this assessment about',
      icon: 'https://s3.ap-south-1.amazonaws.com/mai-cms/icons/icon_emotional.png',
      bgColor: '#55c58d',
    },
    {
      cardType: 'ASSESSMENT_SCORE_BLOCK',
      title: 'High',
      titleColor: '#55c58d',
      subTitle: 'Preference Learning Style',
      icon: 'https://s3.ap-south-1.amazonaws.com/mai-cms/icons/icon_emotional.png',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      scoreBlocks: [
        {
          bgColor: '#f9a43a',
          progress: 77,
          _id: '123',
          progressText: '77%',
          title: 'Logical/Mathematical',
        },
        {
          bgColor: '#55c58d',
          progress: 69,
          _id: '123',
          progressText: '69%',
          title: 'Intra Personal',
        },
      ],
    },
    {
      cardType: 'ASSESSMENT_VIDEO',
      title: 'How to read this report',
      url: 'https://www.youtube.com/watch?v=nfHXOet2Sps',
      coverImageURL: 'https://s3.ap-south-1.amazonaws.com/mai-cms/videos/video_1.jpg',
    },
    {
      cardType: 'ASSESSMENT_HOBBY',
      title: 'High',
      titleColor: '55c58d',
      infoIcon: '',
      infoText: '',
      subTitle: 'Suitable Hobbies/Activities for',
      recommendations: [
        {
          title: 'India Classical Dance',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          _id: '262626',
          buttonLabel: 'Talk to coach',
          icon: 'https://s3.ap-south-1.amazonaws.com/mai-cms/icons/icon_emotional.png',
          buttonColor: '#22a6f9',
          services: [
            {
              _id: '456',
              name: 'Mohiniattam',
            },
            {
              _id: '456',
              name: 'Kathak',
            },
            {
              _id: '456',
              name: 'Mohini',
            },
          ],
        },
        {
          title: 'India Classical Dance',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          _id: '262626',
          buttonLabel: 'Request Recieved',
          icon: 'https://s3.ap-south-1.amazonaws.com/mai-cms/icons/icon_emotional.png',
          buttonColor: '#22a6f9',
          services: [
            {
              _id: '456',
              name: 'Mohiniattam',
            },
            {
              _id: '456',
              name: 'Kathak',
            },
            {
              _id: '456',
              name: 'Mohini',
            },
          ],
        },
      ],
    },
    {
      cardType: 'ASSESSMENT_DASHBOARD',
      title: 'Hello, Sangeetha',
      profilePic: 'https://s3.ap-south-1.amazonaws.com/mai-cms/icons/icon_emotional.png',
      subTitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      profileBlocks: [
        {
          cardType: 'ASSESSMENT',
          title: 'Learning Genius',
          _id: '666',
          status: 'Completed',
          buttonLabel: 'View Report',
          icon: 'https://s3.ap-south-1.amazonaws.com/mai-cms/icons/icon_emotional.png',
          buttonBgColor: '#22a6f9',
        },
        {
          cardType: 'ASSESSMENT',
          title: 'Logical Ability Genius',
          _id: '666',
          status: 'Unlock',
          buttonLabel: 'Unlock Now',
          icon: 'https://s3.ap-south-1.amazonaws.com/mai-cms/icons/icon_emotional.png',
          buttonBgColor: '#f9a43a',
        },
        {
          cardType: 'CTA',
          buttons: [
            {
              label: 'Rs 199',
              title: 'Logical Genius',
              subTitle: 'Unlock now',
              buttonBgColor: '#22a6f9',
              skUId: '62763',
              amount: 199,
            },
            {
              label: 'Rs 699 only',
              title: 'Unlock all 7 genius tests',
              subTitle: 'Worth 1399 Limited time offer.',
              buttonBgColor: '#55c58d',
              skUId: '62763',
              amount: 699,
            },
          ],
        },
      ],
    },
    {
      cardType: 'TESTIMONIAL',
      profilePic: 'https://s3.ap-south-1.amazonaws.com/mai-cms/icons/icon_emotional.png',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      authorInfo: '-Sangeetha, mother of Shreya',
    },
  ],
  error: {},
};

export default maiData;
