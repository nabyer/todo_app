API-Dokumentation für die TODO-App
Die TODO-App bietet eine Reihe von Endpunkten für das Erstellen, Lesen, Aktualisieren und Löschen von To-Do-Einträgen. Zusätzlich werden Filteroptionen unterstützt, um To-Do-Einträge nach Bearbeiter und Ersteller zu filtern.

Base URL
Die Basis-URL für alle API-Anfragen ist http://localhost:4000.

Endpunkte
GET /todo
Beschreibung: Ruft alle vorhandenen To-Do-Einträge ab.
Parameter: Keine.
Antwort: Eine Liste von To-Do-Einträgen im JSON-Format.
Beispiel: GET http://localhost:4000/todo


GET /todo/:id
Beschreibung: Ruft einen spezifischen To-Do-Eintrag anhand seiner ID ab.
Parameter: id: Die eindeutige ID des To-Do-Eintrags.
Antwort: Der To-Do-Eintrag im JSON-Format.
Beispiel: GET http://localhost:4000/todo/1


Filterung
To-Do-Einträge können nach Bearbeiter oder Ersteller gefiltert werden. Verwende dazu die Query-Parameter assignee oder owner. Du kannst entweder nach dem Bearbeiter oder nach dem Ersteller filtern, indem du den entsprechenden Parameter mit dem Namen der Person angibst. Hier sind Beispiele, wie die Filterung angewendet werden kann:

GET /todo/filter?assignee=Max: Dies zeigt alle To-Do-Einträge an, die von "Max" bearbeitet werden.
GET /todo/filter?owner=Michael: Dies zeigt alle To-Do-Einträge an, die von "Michael" erstellt wurden.

Stelle sicher, dass du den richtigen Query-Parameter verwendest, um die gewünschten To-Do-Einträge zu filtern. Wenn kein passender To-Do-Eintrag gefunden wird, gibt die API eine leere Liste zurück.


POST /todo
Beschreibung: Erstellt einen neuen To-Do-Eintrag.
Body: Ein JSON-Objekt mit den Eigenschaften toDo, deadline, assignee, owner und status.
Antwort: Der erstellte To-Do-Eintrag im JSON-Format.

Beispiel: 

POST http://localhost:4000/todo

{
    "toDo": "Einkaufen gehen",
    "deadline": "2024-04-30T00:00:00.000Z",
    "assignee": "Max",
    "owner": "Michael",
    "status": "not started"
}


PUT /todo/:id
Beschreibung: Aktualisiert einen vorhandenen To-Do-Eintrag anhand seiner ID.
Parameter: id: Die eindeutige ID des To-Do-Eintrags.
Body: Ein JSON-Objekt mit den Eigenschaften toDo, deadline, assignee, owner und status.
Antwort: Keine (204 No Content bei Erfolg).

Beispiel:

PUT http://localhost:4000/todo/1

{
    "toDo": "Einkaufen gehen und Milch kaufen",
    "deadline": "2024-04-30T00:00:00.000Z",
    "assignee": "Max",
    "owner": "Michael",
    "status": "in progress"
}


PATCH /todo/:id
Beschreibung: Aktualisiert einen vorhandenen To-Do-Eintrag teilweise anhand seiner ID.
Parameter: id: Die eindeutige ID des To-Do-Eintrags.
Body: Ein JSON-Objekt mit den zu aktualisierenden Eigenschaften.
Antwort: Keine (204 No Content bei Erfolg).

Beispiel: 

PATCH http://localhost:4000/todo/1

{
    "status": "ready for review"
}


DELETE /todo/:id
Beschreibung: Löscht einen vorhandenen To-Do-Eintrag anhand seiner ID.
Parameter: id: Die eindeutige ID des To-Do-Eintrags.
Antwort: Keine (204 No Content bei Erfolg).
Beispiel: DELETE http://localhost:4000/todo/1