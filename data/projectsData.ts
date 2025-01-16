interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '魔力空间Mooly',
    description: `一款以AI为核心的个人成长陪伴助手`,
    imgSrc: '/static/images/mooly/7.jpg',
    href: '/blog/魔力空间Mooly',
  },
  {
    title: '3D明信片',
    description: `拜年节日类祝福作为一种传统低频社交，形式一直在演化，面对面 => 电话 => 短信 => 微信（消息、语音、视频、红包、朋友圈海报）。`,
    imgSrc: '/static/images/threecard/3d.png',
    href: '/blog/3D明信片',
  },
  {
    title: '吃什么智能助手',
    description: `一款小程序，基于用户偏好，为用户推荐菜品。记录卡路里摄入，提供饮食建议。`,
    imgSrc: '/static/images/aifood/logo.jpeg',
    href: '/blog/吃什么智能助手',
  },
]

export default projectsData
