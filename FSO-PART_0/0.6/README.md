## 0.6
```mermaid
    sequenceDiagram
        participant browser
        participant server
        
        
        note right of browser:  new note in JSON format, including both content ( content ) and timestamp ( date )
        browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
        activate server

        server-->>browser: 201 created
        deactivate server


```