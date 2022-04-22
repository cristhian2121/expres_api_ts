import { MigrationInterface, QueryRunner } from "typeorm";

export class first0011650598564387 implements MigrationInterface {
    name = 'first0011650598564387'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" text NOT NULL, "filename" character varying NOT NULL, "views" integer NOT NULL, "isPublished" boolean NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(48) NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT '"2022-04-22T03:36:06.621Z"', CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
