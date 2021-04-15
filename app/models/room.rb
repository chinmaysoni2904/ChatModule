class Room < ApplicationRecord
  before_create do
    opentok = OpenTok::OpenTok.new(Rails.application.secrets[:vonage_api_key], Rails.application.secrets[:vonage_secret_key])
    session = opentok.create_session
    self.vonage_session_id = session.session_id
  end
end
