# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Art.create(title: "Red, Blue and Yellow Abstract Painting", artist_name: "Fuu J", image_url: "https://images.unsplash.com/photo-1599797574782-fd636bdb5cd2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njd8fHBhaW50aW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")
Comment.create(content: "Great artwork!", name: "Yuliya M.", art_id: 1 )