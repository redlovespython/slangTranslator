# SlangTranslator
# THIS PLUGIN IS HEAVILY BASED ON AND INSPIRED BY THE TRANSLATE VENCORD PLUGIN - https://github.com/Vendicated/Vencord/tree/main/src/plugins/translate

A Vencord plugin that translates slang between languages, currently supporting English to Portuguese with more languages planned.




## Features

- Translate English slang terms, expressions, and abbreviations into Portuguese
- Right-click or hover over any message to translate slang
- Toggle automatic translation of outgoing messages
- Comprehensive dictionary of internet slang.
- Customizable settings
- Framework for adding more languages in the future

## Preview

When you send a message with slang or right-click or hover over a message with slang, the plugin will translate it:

```
"that's fr crazy wtf no cap"
```

Will be translated to:

```
"isso é sério louco que diabos sem mentira"
```

## Installation

### Installing Vencord
If you don't have Vencord installed:
1. Refer to this [YouTube tutorial](https://www.youtube.com/watch?v=3anTy0EdvsE) for a complete guide on installing Vencord properly
2. Follow the official instructions on the [Vencord GitHub repository](https://github.com/Vendicated/Vencord)

### Installing the SlangTranslator Plugin
1. Download this repository
2. Place the slangTranslator folder inside your Vencord's `src/userplugins` directory
3. Build Vencord:
   ```
   cd /path/to/vencord
   pnpm build
   pnpm inject
   ```
4. Restart Discord
5. Enable the plugin in Vencord settings

## Usage

### Translating Received Messages

- Right-click on any message and select "Translate Slang"
- The translated message will appear below the original

### Translating Your Messages

- Click the slang translator icon in the chat bar to open settings
- Enable "Auto Translate" to automatically translate your messages before sending
- You can toggle auto-translate by shift+clicking or right-clicking the chat bar icon

## Settings

The plugin settings can be accessed by clicking the slang translator icon in the chat bar:

- **Auto Translate**: Automatically translate slang before sending messages
- **Show button in chat bar**: Toggle the visibility of the chat bar button
- **Show AutoTranslate tooltip**: Show a tooltip when messages are auto-translated

## Supported Slang

The plugin supports hundreds of slang terms and expressions including:

- Common text/chat abbreviations (lol, brb, afk, etc.)
- Social media slang and terminology
- brainrot

## Contributing

How to contribute!

### Adding New Slang Terms
You can expand the dictionary by adding more slang terms to the existing language files.

### Adding Support for New Languages
To add support for a new language:

1. Create a new file in the `slangDictionaries` folder (e.g., `en-es.ts` for English to Spanish)
2. Define the slang dictionary using the same format as in the existing dictionaries
3. Update the settings to include the new language option

Pull requests for new languages are welcome!

## Credits

Created by [redlovespython](https://github.com/redlovespython)

Built for [Vencord](https://github.com/Vendicated/Vencord)

Inspired by [Translate](https://github.com/Vendicated/Vencord/tree/main/src/plugins/translate)
