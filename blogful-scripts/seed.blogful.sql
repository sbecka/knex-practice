BEGIN;

INSERT INTO blogful_articles 
    (title, date_published, content)
VALUES
    ('Eating Avocados', now(), null),
    ('Lorem', now() - '2 days'::INTERVAL, 'dolor sit amet.'),
    ('Eating Burritos Every Week', now() - '3 days'::INTERVAL, null),
    ('Ipsum', now() - '6 days'::INTERVAL, 'Lorem ipsum, or lipsum as it is sometimes known.'),
    ('Eating Avocados in a Latte', now() - '8 days'::INTERVAL, null),
    ('History of lorem', now() - '9 days'::INTERVAL, 'The passage experienced a surge in popularity during the 1960s.'),
    ('Learning to Fly', now() - '10 days'::INTERVAL, null),
    ('Scuttle Seagull', now() - '1 days'::INTERVAL, 'Prow scuttle parrel provost Sail ho shrouds spirits boom.'),
    ('Movies in My World', now() - '11 days'::INTERVAL, null),
    ('Jack the Lad', now() - '13 days'::INTERVAL, 'Deadlights jack lad schooner scallywag dance the hempen jig.'),
    ('Eating with Chef Ram', now() - '12 days'::INTERVAL, null),
    ('Trying to Sail the Sea', now() - '14 days'::INTERVAL, 'Trysail Sail ho Corsair red ensign hulk smartly boom.'),
    ('Eating Fish with the Sharks', now() - '15 days'::INTERVAL, null),
    ('Rum in a coconut', now() - '17 days'::INTERVAL, 'Rum bilge rat man-of-war bounty topgallant American Main chase.'),
    ('Speaking like a pirate', now() - '19 days'::INTERVAL, null),
    ('Scary jellyfish', now() - '20 days'::INTERVAL, 'Man-of-war yardarm lee log run a rig.'),
    ('Following my heart', now() - '21 days'::INTERVAL, null),
    ('Davy Jones Locker', now() - '22 days'::INTERVAL, 'Stern swing the lead sheet flogging crow''s nest strike colors. Crimp gabion loot crack Jennys tea cup plunder strike colors. Davy Jones'' Locker.'),
    ('Getting sea legs', now() - '23 days'::INTERVAL, 'Topmast Sea Legs fathom provost. Poop deck doubloon black jack blow the man down. Plate Fleet.'),
    ('Ship shape', now() - '24 days'::INTERVAL, 'Yellow Jack sloop long clothes gabion. Heave to take a caulk no prey, no pay gabion.');

COMMIT;