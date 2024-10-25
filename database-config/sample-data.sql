INSERT INTO folders ( folder ) VALUES
	( 'Begriffe für Programmierer*innen' );
    
SET @programming_folder_id = LAST_INSERT_ID();
    
INSERT INTO folders ( folder ) VALUES
    ( 'Computervokabular' );
    
SET @computer_folder_id = LAST_INSERT_ID();
    
INSERT INTO flashcards ( word, translation, gender, word_class, state, example_sentence, folder_id ) VALUES
	('Anweisung', 'instruction', 'die', 'noun', 'acquired', 'Folgst du jeder Anweisung genau.', @programming_folder_id),
    ('Befehl', 'command', 'der', 'noun', 'familiar', 'Der Soldat befolgte den Befehl seines Vorgesetzten.', @programming_folder_id),
    ('Eingabe', 'input', 'die', 'noun', 'unfamiliar', 'Die Eingabe der Daten sollte schnell und einfach sein.', @programming_folder_id),
    ('Ausgabe', 'output', 'die', 'noun', 'unfamiliar', '', @programming_folder_id),
    ('Schleife', 'loop', 'die', 'noun', 'unfamiliar', '', @programming_folder_id),
    ('auswerten', 'evaluate', null, 'verb', 'unfamiliar', '', @programming_folder_id),
    ('Bedingung', 'condition', 'die', 'noun', 'unfamiliar', 'Dieser Vertrag kommt allerdings mit einigen Bedingungen.', @programming_folder_id);
    
INSERT INTO flashcards ( word, translation, gender, word_class, state, example_sentence, folder_id ) VALUES
	('Feststelltaste', 'caps lock key', 'die', 'noun', 'unfamiliar', '', @computer_folder_id),
    ('Anschluss', 'connection', 'der', 'noun', 'unfamiliar', 'Um dieses Kabel einzustecken, muss ich den richtigen Anschluss finden.', @computer_folder_id),
    ('abbrechen', 'cancel', null, 'verb', 'unfamiliar', 'Der Sturm brach die Internetverbindung ab.', @computer_folder_id),
    ('ausschneiden', 'cut', null, 'verb', 'unfamiliar', 'Ausschneiden und einfügen.', @computer_folder_id),
    ('einfügen', 'paste', null, 'verb', 'unfamiliar', 'Ausschneiden und einfügen.', @computer_folder_id);