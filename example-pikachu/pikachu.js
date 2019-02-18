exports.handler = (event, context, callback) => {
    switch (event.request.type) {
        case "LaunchRequest":
        context.succeed(
          generateResponse(
              buildSpeechletResponse("Hi, I am Pikachu.", false)
          )
        )
            break;
        case "IntentRequest":
            switch (event.request.intent.name) {
                case "pikachuIntent":
                    context.succeed(
          generateResponse(
              buildSpeechletResponse("I am Pikachu, nice to meet you. Are you Morgan Chuang?", true)
          )
        )
                    break;
            }
            break;
    }
}


buildSpeechletResponse = (outputText, shouldEndSession) => {

  return {
    outputSpeech: {
      type: "PlainText",
      text: outputText
    },
    shouldEndSession: shouldEndSession
  }

}

generateResponse = (speechletResponse) => {

  return {
    version: "1.0",
    response: speechletResponse
  }

}