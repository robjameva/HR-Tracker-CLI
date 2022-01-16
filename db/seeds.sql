INSERT INTO departments (name)
VALUES
  ('Engineering'),
  ('Accounting'),
  ('Human Resources'),
  ('Sales'),
  ('Purchasing'),
  ('Leadership');



INSERT INTO roles (title, salary, department_id)
VALUES
  ('Jr. Developer', 85000, 1),
  ('Sr. Developer', 115000, 1),
  ('Staff Accountant', 75000, 2),
  ('Sr. Accountant', 100000, 2),
  ('HR Coordinator', 65000, 3),
  ('HR Manager', 85000, 3),
  ('Sales Coordinator', 60000, 4),
  ('Sales Manager', 85000, 4),
  ('Purchaser', 60000, 5),
  ('Warehouse Manager', 75000, 5),
  ('Assistant Director', 120000, 6),
  ('Director', 130000, 6);



INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('Carey', 'Molloy', 12, NULL),
  ('Nathanil', 'La Batie', 12, NULL),
  ('Pippa', 'Redsull', 12, NULL),
  ('Taryn', 'Finnis', 12, NULL),
  ('Alley', 'Birrell', 12, NULL),
  ('Pepita', 'Di Boldi', 11, NULL),
  ('Lily', 'Nairn', 11, NULL),
  ('Keith', 'Zeplin', 11, NULL),
  ('Patrick', 'Guido', 11, NULL),
  ('Orly', 'Maddock', 11, NULL),
  ('Ginelle', 'Ruspine', 11, NULL),
  ('Hyacintha', 'Bascombe', 11, NULL),
  ('Candra', 'Dymidowicz', 11, NULL),
  ('Sherm', 'Kulis', 11, NULL),
  ('Edlin', 'Chester', 11, NULL),
  ('Ronnica', 'McLaughlan', 2, 10),
  ('Tonia', 'Kelcher', 9, 10),
  ('Jackson', 'Cordier', 1, 14),
  ('Zarla', 'Tingey', 2, 10),
  ('Avigdor', 'Prestage', 1, 11),
  ('Terrie', 'Thominga', 7, 4),
  ('Ephrem', 'Schwandt', 1, 1),
  ('Gennie', 'Lamy', 5, 13),
  ('Jermaine', 'Gollop', 1, 12),
  ('Ario', 'Thew', 4, 15),
  ('Delly', 'Balazs', 8, 5),
  ('Demetria', 'Packwood', 10, 11),
  ('Tucker', 'Birdsall', 9, 15),
  ('Johnnie', 'Goldin', 10, 2),
  ('Cindra', 'Rutt', 6, 15),
  ('Carolus', 'Lewtey', 10, 15),
  ('Domenic', 'Forten', 5, 3),
  ('Lulu', 'Hamley', 9, 3),
  ('Sindee', 'Aldam', 5, 5),
  ('Fulton', 'Toffler', 7, 3),
  ('Merrill', 'Baltrushaitis', 2, 9),
  ('Udall', 'Normant', 1, 15),
  ('Aubry', 'Phuprate', 10, 5),
  ('Lucina', 'Christol', 10, 13),
  ('Josy', 'Brinson', 5, 14),
  ('Olenka', 'Trembath', 5, 6),
  ('Jeanine', 'Samet', 4, 12),
  ('Christal', 'Larose', 7, 10),
  ('Idell', 'Finlow', 8, 5),
  ('Isabella', 'Pietrowicz', 10, 8),
  ('Nicola', 'Balstone', 9, 6),
  ('Annis', 'Spenceley', 1, 8),
  ('Gussy', 'Shackel', 6, 7),
  ('Gilemette', 'Spiers', 9, 13),
  ('Georgena', 'Hancill', 10, 8),
  ('Kissie', 'Slowcock', 8, 8),
  ('Mikol', 'Le land', 3, 13),
  ('Sophey', 'Guppy', 1, 12),
  ('Hilda', 'Maudsley', 8, 5),
  ('Corinna', 'Heckle', 5, 1),
  ('Elysee', 'Kaasman', 1, 13),
  ('Heath', 'Chater', 1, 7),
  ('Leonora', 'Gallop', 8, 3),
  ('Osborne', 'Candlin', 1, 6),
  ('Florance', 'Keller', 9, 3),
  ('Marleen', 'Cadreman', 7, 10),
  ('Agnesse', 'De Vere', 9, 14),
  ('Cobby', 'Heck', 6, 2),
  ('Lucius', 'Closs', 4, 6),
  ('Kristal', 'Leupold', 1, 11),
  ('Julieta', 'Jenton', 3, 4),
  ('Feliza', 'Metts', 4, 9),
  ('Reinhold', 'Raymond', 2, 9),
  ('Ottilie', 'Kenewell', 2, 10),
  ('Atlante', 'Tapsfield', 7, 13),
  ('Jocelin', 'Rubinowitsch', 1, 11),
  ('Shelly', 'Lockhead', 1, 1),
  ('Margaretha', 'Zorzenoni', 6, 2),
  ('Rabbi', 'McEvay', 5, 2),
  ('Merrie', 'Stoneman', 3, 2),
  ('Barbette', 'Lazenby', 7, 11),
  ('Lilah', 'Shawcroft', 7, 2),
  ('Mar', 'Leadley', 9, 1),
  ('Randie', 'Weeds', 10, 13),
  ('Harri', 'Pavolillo', 1, 7),
  ('Hurlee', 'Jorioz', 2, 3),
  ('Charlean', 'Polendine', 1, 14),
  ('Bernetta', 'Santon', 5, 7),
  ('Davon', 'Slowan', 8, 10),
  ('Gretchen', 'Gallen', 6, 3),
  ('Minta', 'Nan Carrow', 3, 9),
  ('Port', 'Pasque', 6, 4),
  ('Fancy', 'Philpault', 8, 7),
  ('Prudy', 'Trevers', 8, 2),
  ('Bern', 'Rozsa', 7, 3),
  ('Hatty', 'Heazel', 6, 1),
  ('Roxi', 'Grene', 7, 14),
  ('Hedi', 'Saunder', 9, 6),
  ('Brynn', 'Gouldsmith', 10, 14),
  ('Arlena', 'Hyndley', 7, 8),
  ('Georgianne', 'Baldetti', 1, 4),
  ('Fanya', 'Dallander', 6, 5),
  ('Felic', 'Fenny', 7, 7),
  ('Jillian', 'Joyes', 2, 11),
  ('Immanuel', 'Dietmar', 7, 5);