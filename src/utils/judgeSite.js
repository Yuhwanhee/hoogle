const judgeSite = (path) => {

    const list = [
        { path: 'naver.com', name: '네이버', icon: 'naver.png' },
        { path: 'nate.net', name: '네이트', icon: '' },
        { path: 'namuwiki', name: '나무위키', icon: 'tree.png' },
    ]

    for (const item of list) {
        if (path.includes(item.path)) {
            return {name: item.name, icon: item.icon}
        }
    }
    return 'Unknown'







}

export default judgeSite