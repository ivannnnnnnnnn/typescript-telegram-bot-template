CREATE TABLE IF NOT EXISTS "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"telegram_id" integer NOT NULL,
	"is_bot" boolean DEFAULT false,
	"is_premium" boolean DEFAULT false,
	"added_to_attachment_menu" boolean DEFAULT false,
	"first_name" varchar(256),
	"last_name" varchar(256),
	"username" varchar(256),
	"language_code" varchar(2),
	CONSTRAINT "user_telegram_id_unique" UNIQUE("telegram_id")
);
