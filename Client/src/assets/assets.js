import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import profile_img_3 from './profile_img_3.png'

export const assets = {
    logo,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon
}

export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
      icon: step_icon_1,
    },
    {
      title: 'Watch the Magic',
      description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
      icon: step_icon_2,
    },
    {
      title: 'Download & Share',
      description: 'Instantly download your creation or share it with the world directly from our platform.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
    {
        image:profile_img_3,
        name:'Naveen Thakur',
        role:'Graphic Designer',
        stars:5,
        text:`Textura is a lifesaver for graphic designers like me! It translates my ideas into visually compelling graphics in just a few clicks. Whether I'm designing for Instagram or client projects, the user interface is intuitive, and the results are always professional-grade. This tool has streamlined my workflow and made crafting eye-catching visuals faster and more efficient. Highly recommend it to anyone in the creative field!"`
    },
    {
        image:profile_img_2,
        name:'Devashish',
        role:'Youtuber',
        stars:5,
        text:`Textura has been a game-changer for my YouTube thumbnails and Instagram posts. As a content creator, having a tool that seamlessly combines creativity and simplicity is a must. The variety of options and styles it offers ensures every output stands out and grabs attention. If you're a YouTuber looking to elevate your branding across platforms, this is the tool you didn’t know you needed!"`
    },
    {
        image:profile_img_1,
        name:'Geetesh Kumar',
        role:'Social Media Manager',
        stars:5,
        text:`I've been using the Textura text-to-image generator for a few months, and it's nothing short of amazing. The ease of use and precision in turning text into stunning visuals make it a must-have tool for designers. Whether I’m creating content for social media or branding, this tool consistently exceeds my expectations!`
    },
]

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 100,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]