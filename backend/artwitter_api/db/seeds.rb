# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

art1= Art.create(title: "Red, Blue and Yellow Abstract Painting", artist_name: "Fuu J", image_url: "https://images.unsplash.com/photo-1599797574782-fd636bdb5cd2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njd8fHBhaW50aW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")
Comment.create(content: "Great artwork!", name: "Yuliya M.", art_id: art1.id )

art2= Art.create(title: "Fox", artist_name: "Fuu J", image_url: "https://images.unsplash.com/photo-1594136976553-38699ae9047c?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDZ8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")
Comment.create(content: "Awesome artwork!", name: "Yuliya M.", art_id: art2.id )

art3= Art.create(title: "Fox Mom and Child", artist_name: "Fuu J", image_url: "https://images.unsplash.com/photo-1613206468203-fa00870edf79?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")
Comment.create(content: "This is sweet!", name: "Yuliya M.", art_id: art3.id )

art4= Art.create(title: "Cat", artist_name: "Fuu J", image_url: "https://images.unsplash.com/photo-1612760721786-a42eb89aba02?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")
Comment.create(content: "Nice cat!", name: "Yuliya M.", art_id: art4.id )

art5= Art.create(title: "Bear and Bunny", artist_name: "Fuu J", image_url: "https://images.unsplash.com/photo-1613903121800-2e98b1886595?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")
Comment.create(content: "Great artwork!", name: "Yuliya M.", art_id: art5.id )

art6= Art.create(title: "Girl with Yellow Hair", artist_name: "Fuu J", image_url: "https://images.unsplash.com/photo-1600251527636-6e5eacbf07e3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MzR8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")
Comment.create(content: "Beautiful!", name: "Yuliya M.", art_id: art6.id )