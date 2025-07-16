class ApplicationController < ActionController::Base
  inertia_share do
    {
      current_user: {
        id: 1,
        name: "Tristan S",
      },
      notifications: [
        { id: 1, body: "new test notification"}
      ]
    }
  end
end
