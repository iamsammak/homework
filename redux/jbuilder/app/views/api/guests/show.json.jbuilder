# json.extract! @guest, :name, :age, :favorite_color
# json.gifts do
#   json.array! @guest.gifts, :title, :description
# end

# using the partial
json.partial! 'api/guests/guest'
json.gifts @guest.gifts, partial: 'api/gifts/gift', as: :gift
