

function foo(args) {
    fetch('https://custom-app-template/foo', {
        method: 'POST',
        body: JSON.stringify(args)
    })
}

const selectorNormal = () => {
    OpenSelector('Test', [
        { key: 'test', value: 'Test' },
        { key: 'test2', value: 'Test2' }
    ], (key, value) => {
        console.log(key, value)
    })
    fetch('https://custom-app-template/foo', {
        method: 'POST',
        body: JSON.stringify({ key: 'test', value: 'Test' })
    })
}

const selectorAsync = async () => {
    const { key, value } = await OpenSelectorAsync('Test', [
        { key: 'test', value: 'Test' },
        { key: 'test2', value: 'Test2' }
    ])
    console.log(key, value)
}

const promptNormal = () => {
    PromptModal('Im title', 'Im subtitle', 'Im placeholder', (value) => {
        console.log(value)
    }, 'cancelText', 'confirmText')
}

const promptAsync = async () => {
    const value = await PromptModalAsync('Im title', 'Im subtitle', 'Im placeholder', 'cancelText', 'confirmText')
    console.log(value)
}

const selectCamItem = async () => {
    const url = await OpenSelectCamItem()
    console.log(url)
}

const selectPhotoMenu = async () => {
    const url = await OpenSelectPhotoMenu()
    console.log(url)
}

const openSelectGifMenu = async () => {
    const url = await OpenSelectGifMenu()
    console.log(url)
}

const requestMoneyModal = async () => {
    const price = await OpenRequestMoneyModel()
    console.log(price)
}

const pushNotification = () => {
    SendPhoneNotification('template', 'Test', 'Im a test message ye', 3000)
}

const pushNotificationOld = () => {
    SendPhoneNotificationOld('template', 'Test', 'Im a test message ye', 3000)
}

const openImage = () => {
    const image = 'https://cdn.discordapp.com/attachments/919189411403558912/1149712534409064480/screenshot.png'
    const filter = 'filter-1977'
    OpenImage(image, filter)
}

const rotatePhone = () => {
    Rotate()
}

const setupCall = () => {
    SetupCall({
        name: 'Admin Banned',
        number: '123',
    })
}