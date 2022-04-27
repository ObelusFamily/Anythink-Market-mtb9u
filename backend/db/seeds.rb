# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

FAKE_PASSWORD = 'password'
100.times do |_|
    fake_user = Faker::Internet.unique.user
    user = User.create!(:email => fake_user[:email], :password => FAKE_PASSWORD, 
                        :password_confirmation => FAKE_PASSWORD, username: fake_user[:username].gsub(/[^a-zA-Z0-9]/, ""))
    20.times do |_|
        Item.create!(title: Faker::Commerce.product_name, description: Faker::Lorem.paragraph, user: user)
    end
end