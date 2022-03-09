FactoryBot.define do
  factory :jwt_denylist do
    jti { "MyString" }
    exp { "2022-02-21 11:27:02" }
  end
end
