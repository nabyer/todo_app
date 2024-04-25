# TODO-App API

## Installation 

1. Stelle sicher dass, Node.js und npm auf dem System installiert sind.

2. Klone das Repository:
   git-clone <https://github.com/nabyer/todo_app>

3. Gehe in das Verzeichnis
   cd todo_app

4. Installiere die Abhängigkeiten:
   npm install

5. Starte den Server:
   npm start


Die API sollte jetzt auf `http://localhost:4000` laufen.

## Nutzung

### Endpunkte

Die API bietet folgende Endpunkte:

- `GET /todo`: Zeigt alle vorhandenen TO-Do-Einträge an.
- `GET /todo/:id`: Zeigt To-Do-Eintrag an Hand seiner ID an.
- `POST /todo`: Erstellt einen neuen To-Do-Eintrag.
- `PUT /todo`: Aktualisiert einen vorhandenen To-Do-Eintrag.
- `PATCH /todo`: Aktualisiert einen vorhandenen To-Do-Eintrag teilweise.
- `DELETE /todo`: Löscht einen vorhandenen To-Do-Eintrag.


### Filterung

To-Do-Einträge können nach Bearbeiter und Ersteller gefiltert werden. Verwende dazu die Query-Parameter `assignee` oder `owner`. Beispiel:

GET /todo?assignee=Max

Dies zeigt alle To-Do-Einträge, die von "Max" bearbeitet werden.


## Authentifizierung

Die API erfodert eine Authentifizierung über einen Autorisierungs-Header für bestimmte Endpunkte. Stelle sicher, dass du den Header `Authorization` verwendest, um auf geschützte Endpunkte zuzugreifen.


## Fehlerbehandlung

Die API gibt entsprechende Fehlercodes und Nachrichten zurück, wenn eine Anfrage fehlschlägt. Beachte die Fehlermeldungen und korrigiere deine Anfrage entsprechend.