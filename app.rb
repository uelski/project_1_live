require 'bundler'
Bundler.require

get '/' do
  erb :home
end

get'/jaco_says' do
  erb :index
end
