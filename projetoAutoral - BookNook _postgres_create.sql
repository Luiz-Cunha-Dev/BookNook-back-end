CREATE TABLE "users" (
	"id" serial NOT NULL PRIMARY KEY,
	"username" TEXT NOT NULL,
	"email" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	"pictureUrl" TEXT,
	"darkMode" bool NOT NULL
);



CREATE TABLE "sessions" (
	"id" serial NOT NULL PRIMARY KEY,
	"userId" integer NOT NULL,
	"token" TEXT NOT NULL UNIQUE
);



CREATE TABLE "entertainments" (
	"id" serial NOT NULL PRIMARY KEY,
	"name" TEXT NOT NULL,
	"imageUrl" TEXT NOT NULL,
	"typeId" integer NOT NULL,
	"category1Id" integer,
	"category2Id" integer,
	"category3Id" integer
);



CREATE TABLE "types" (
	"id" serial NOT NULL PRIMARY KEY,
	"name" TEXT NOT NULL
);



CREATE TABLE "categories" (
	"id" serial NOT NULL PRIMARY KEY,
	"name" TEXT NOT NULL
);



CREATE TABLE "entertainmentsUsers" (
	"id" serial NOT NULL PRIMARY KEY,
	"userId" integer NOT NULL,
	"entertainmentId" integer NOT NULL,
	"grade" integer NOT NULL,
	"comment" TEXT 
);



CREATE TABLE "goals" (
	"id" serial NOT NULL PRIMARY KEY,
	"userId" integer NOT NULL,
	"quantity" integer NOT NULL,
	"goal" integer NOT NULL,
	"typeId" integer NOT NULL,
	"month" integer NOT NULL,
	"year" integer NOT NULL
);




ALTER TABLE "sessions" ADD CONSTRAINT "sessions_fk0" FOREIGN KEY ("userId") REFERENCES "users"("id");

ALTER TABLE "entertainments" ADD CONSTRAINT "entertainments_fk0" FOREIGN KEY ("typeId") REFERENCES "types"("id");
ALTER TABLE "entertainments" ADD CONSTRAINT "entertainments_fk1" FOREIGN KEY ("category1Id") REFERENCES "categories"("id");
ALTER TABLE "entertainments" ADD CONSTRAINT "entertainments_fk2" FOREIGN KEY ("category2Id") REFERENCES "categories"("id");
ALTER TABLE "entertainments" ADD CONSTRAINT "entertainments_fk3" FOREIGN KEY ("category3Id") REFERENCES "categories"("id");



ALTER TABLE "entertainmentsUsers" ADD CONSTRAINT "entertainmentsUsers_fk0" FOREIGN KEY ("userId") REFERENCES "users"("id");
ALTER TABLE "entertainmentsUsers" ADD CONSTRAINT "entertainmentsUsers_fk1" FOREIGN KEY ("entertainmentId") REFERENCES "entertainments"("id");

ALTER TABLE "goals" ADD CONSTRAINT "goals_fk0" FOREIGN KEY ("userId") REFERENCES "users"("id");
ALTER TABLE "goals" ADD CONSTRAINT "goals_fk1" FOREIGN KEY ("typeId") REFERENCES "types"("id");








