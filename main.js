
(function () {
    const template = document.createElement("template")
    template.innerHTML = `
        <style>
        :root {
        --body-bg: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        --msger-bg: #fff;
        --border: 2px solid #ddd;
        --left-msg-bg: #ececec;
        --right-msg-bg: #579ffb;
        }

        html {
        box-sizing: border-box;
        }

        *,
        *:before,
        *:after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        }

        body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-image: var(--body-bg);
        font-family: Helvetica, sans-serif;
        }

        .msger {
        display: flex;
        flex-flow: column wrap;
        justify-content: space-between;
        width: 100%;
        max-width: 400px;
        margin: 25px 10px;
        height: calc(100% - 50px);
        border: var(--border);
        border-radius: 5px;
        background: var(--msger-bg);
        box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2);
        }

        .msger-header {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-bottom: var(--border);
        background: #eee;
        color: #666;
        }

        .msger-chat {
        flex: 1;
        overflow-y: auto;
        padding: 10px;
        }
        .msger-chat::-webkit-scrollbar {
        width: 6px;
        }
        .msger-chat::-webkit-scrollbar-track {
        background: #ddd;
        }
        .msger-chat::-webkit-scrollbar-thumb {
        background: #bdbdbd;
        }
        .msg {
        display: flex;
        align-items: flex-end;
        margin-bottom: 10px;
        }
        .msg:last-of-type {
        margin: 0;
        }
        .msg-bubble {
        max-width: 450px;
        padding: 15px;
        border-radius: 15px;
        background: var(--left-msg-bg);
        }
        .msg-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        }
        .msg-info-name {
        margin-right: 10px;
        font-weight: bold;
        }
        .msg-info-time {
        font-size: 0.85em;
        }

        .left-msg .msg-bubble {
        border-bottom-left-radius: 0;
        }

        .right-msg {
        flex-direction: row-reverse;
        }
        .right-msg .msg-bubble {
        background: var(--right-msg-bg);
        color: #fff;
        border-bottom-right-radius: 0;
        }

        .msger-inputarea {
        display: flex;
        padding: 10px;
        border-top: var(--border);
        background: #eee;
        }
        .msger-inputarea * {
        padding: 10px;
        border: none;
        border-radius: 3px;
        font-size: 1em;
        }
        .msger-input {
        flex: 1;
        background: #ddd;
        }
        .msger-send-btn {
        margin-left: 10px;
        background: rgb(0, 196, 65);
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        transition: background 0.23s;
        }
        .msger-send-btn:hover {
        background: rgb(0, 180, 50);
        }

        .msger-chat {
        background-color: #fcfcfe;
        }
    </style>

    <section class="msger">
        <header class="msger-header">
            <div class="msger-header-title">
                <i class="fas fa-comment-alt"></i> ChatGPT Integration
            </div>
        </header>

        <main class="msger-chat">
            <div class="msg left-msg">      
                <div class="msg-bubble">
                    <div class="msg-text">
                        &#129302; Hi, welcome to SimpleChat! Go ahead and send me a message.
                    </div>
                </div>
            </div>
        
            <div class="msg right-msg">
                <div class="msg-bubble">
                    <div class="msg-text">
                        You can change your name in JS section!
                    </div>
                </div>
                </div>
            </div>
        </main>

        <form class="msger-inputarea">
            <input type="text" class="msger-input" placeholder="Enter your message...">
            <button type="submit" class="msger-send-btn">Send</button>
        </form>
    </section>
        `
    class Main extends HTMLElement {
        constructor() {
            super()

            this._shadowRoot = this.attachShadow({ mode: 'open' })
            this._shadowRoot.appendChild(template.content.cloneNode(true))

            this._root = this._shadowRoot.getElementById('root')
        }
    }

    customElements.define('com-delaware-sac-chatgptwidget-main', Main)
})()
