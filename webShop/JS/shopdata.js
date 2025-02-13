const categories = [
    {
        id: "phones",
        name: "Телефони",
        items: [
            {id: "1", name: 'Iphone', price: 2000, description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta dolor, ipsam voluptatum asperiores incidunt at nobis debitis dicta architecto, nihil vero eum similique fugiat adipisci sint minus ratione illo cumque magni voluptate mollitia doloribus in! Temporibus doloribus optio qui voluptates vel? Omnis perspiciatis non, numquam officia ex nobis vel inventore.', 
                images: [{src: 'img/1.jpg', alt: 'cat'},
                {src: 'img/2.jpg', alt: 'village road'},
                {src: 'img/3.jpg', alt: 'forest'},]},
            {id: "2", name: 'Galaxy', price: 1300, description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta dolor, ipsam voluptatum asperiores incidunt at nobis debitis dicta architecto, nihil vero eum similique fugiat adipisci sint minus ratione illo cumque magni voluptate mollitia doloribus in! Temporibus doloribus optio qui voluptates vel? Omnis perspiciatis non, numquam officia ex nobis vel inventore.', 
                images: [{src: 'img/4.jpg', alt: 'road'},
                {src: 'img/5.jpg', alt: 'moon'}]},
            {id: "3", name: 'Huawei', price: 1200, description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta dolor, ipsam voluptatum asperiores incidunt at nobis debitis dicta architecto, nihil vero eum similique fugiat adipisci sint minus ratione illo cumque magni voluptate mollitia doloribus in! Temporibus doloribus optio qui voluptates vel? Omnis perspiciatis non, numquam officia ex nobis vel inventore.', 
                images: [{src: 'img/9ce6db78-a83e-4af1-a05e-0f673b3f29ab.jpg', alt: 'night'},
                {src: 'img/e0728cb4-16ec-4931-8caf-6e536c4bfcb5.jpg', alt: 'smth'},
                {src: 'img/c9867917-803b-4142-85f7-e29297b67525.jpg', alt: 'blabla'},]},
            {id: "4", name: 'OnePlus', price: 1000,description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta dolor, ipsam voluptatum asperiores incidunt at nobis debitis dicta architecto, nihil vero eum similique fugiat adipisci sint minus ratione illo cumque magni voluptate mollitia doloribus in! Temporibus doloribus optio qui voluptates vel? Omnis perspiciatis non, numquam officia ex nobis vel inventore.', 
                images:    [{src: 'img/9ce6db78-a83e-4af1-a05e-0f673b3f29ab.jpg', alt: 'night'},
            {src: 'img/e0728cb4-16ec-4931-8caf-6e536c4bfcb5.jpg', alt: 'smth'}, {src: 'img/c9867917-803b-4142-85f7-e29297b67525.jpg', alt: 'blabla'}]},
        ]
    }, 
    {
        id: "laptops",
        name: "Ноутбуки",
        items: [
            {id: "1", name: 'Mackbook', price: 3000, description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta dolor, ipsam voluptatum asperiores incidunt at nobis debitis dicta architecto, nihil vero eum similique fugiat adipisci sint minus ratione illo cumque magni voluptate mollitia doloribus in! Temporibus doloribus optio qui voluptates vel? Omnis perspiciatis non, numquam officia ex nobis vel inventore.', 
                images: [{src: 'img/1.jpg', alt: 'cat'},
                {src: 'img/2.jpg', alt: 'village road'},
                {src: 'img/3.jpg', alt: 'forest'},] },
            {id: "2", name: 'Asus Zenbook', price: 2500,description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta dolor, ipsam voluptatum asperiores incidunt at nobis debitis dicta architecto, nihil vero eum similique fugiat adipisci sint minus ratione illo cumque magni voluptate mollitia doloribus in! Temporibus doloribus optio qui voluptates vel? Omnis perspiciatis non, numquam officia ex nobis vel inventore.', 
                images: [{src: 'img/9ce6db78-a83e-4af1-a05e-0f673b3f29ab.jpg', alt: 'night'},
                {src: 'img/e0728cb4-16ec-4931-8caf-6e536c4bfcb5.jpg', alt: 'smth'},
                {src: 'img/c9867917-803b-4142-85f7-e29297b67525.jpg', alt: 'blabla'},]},
            {id: "3", name: 'HP XXX', price: 1200, description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta dolor, ipsam voluptatum asperiores incidunt at nobis debitis dicta architecto, nihil vero eum similique fugiat adipisci sint minus ratione illo cumque magni voluptate mollitia doloribus in! Temporibus doloribus optio qui voluptates vel? Omnis perspiciatis non, numquam officia ex nobis vel inventore.', 
                images: [{src: 'img/9ce6db78-a83e-4af1-a05e-0f673b3f29ab.jpg', alt: 'night'},
                {src: 'img/e0728cb4-16ec-4931-8caf-6e536c4bfcb5.jpg', alt: 'smth'},
                {src: 'img/c9867917-803b-4142-85f7-e29297b67525.jpg', alt: 'blabla'},]},
            {id: "4", name: 'Dell', price: 1000, description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta dolor, ipsam voluptatum asperiores incidunt at nobis debitis dicta architecto, nihil vero eum similique fugiat adipisci sint minus ratione illo cumque magni voluptate mollitia doloribus in! Temporibus doloribus optio qui voluptates vel? Omnis perspiciatis non, numquam officia ex nobis vel inventore.', 
                images: [{src: 'img/9ce6db78-a83e-4af1-a05e-0f673b3f29ab.jpg', alt: 'night'},
                {src: 'img/e0728cb4-16ec-4931-8caf-6e536c4bfcb5.jpg', alt: 'smth'}, {src: 'img/c9867917-803b-4142-85f7-e29297b67525.jpg', alt: 'blabla'},]},
            {id: "5", name: 'Lenovo', price: 1000, description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta dolor, ipsam voluptatum asperiores incidunt at nobis debitis dicta architecto, nihil vero eum similique fugiat adipisci sint minus ratione illo cumque magni voluptate mollitia doloribus in! Temporibus doloribus optio qui voluptates vel? Omnis perspiciatis non, numquam officia ex nobis vel inventore.', 
                images: [{src: 'img/9ce6db78-a83e-4af1-a05e-0f673b3f29ab.jpg', alt: 'night'},
                {src: 'img/e0728cb4-16ec-4931-8caf-6e536c4bfcb5.jpg', alt: 'smth'}, {src: 'img/c9867917-803b-4142-85f7-e29297b67525.jpg', alt: 'blabla'},],},
        
    ]
    }, ]

    cities = {
        KOZ: "Koziatyn",
        IRP: "Irpin",
        BCH: "Bucha",
        HSTML: "Hostomel",
        KY: "Kyiv",
        ROM: "Romanivka",
        KRK: "Kriukivshchyna",
        VSHN: "Vyshneve",
    };