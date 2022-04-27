# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Item(id: integer, title: string, slug: string, description: string, image: string, favorites_count: integer, user_id: integer, created_at: datetime, updated_at: datetime, tag_list: )