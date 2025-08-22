from gtts import gTTS



with open('arabic.txt', 'r', encoding='utf-8') as file:
    text_to_read = file.read()


tts = gTTS(text=text_to_read, lang="ar")



tts.save("audio/arabic.mp3")

print("Saved.................")
