import mongoose from "mongoose";
import { expect } from "chai";
import { MongoMemoryServer } from "mongodb-memory-server";
import User from "../../models/user.js";

describe("User model test", () => {
    let mongoServer;

    before(async () => {
        mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri(), { dbName: "test" });
    });

    after(async () => {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        await mongoServer.stop();
    });

    afterEach(async () => {
        await User.deleteMany({});
    });

    it("should succesfully create a user", async () => {
        const userData = {
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@example.com",
            profilePic: "http://example.com/avatar.jpg",
            commenting: true,
            isTeacher: false,
            darkTheme: true,
        };

        const validUser = new User(userData);
        const savedUser = await validUser.save();

        expect(savedUser._id).to.exist;
        expect(savedUser.firstName).to.equal(userData.firstName);
        expect(savedUser.lastName).to.equal(userData.lastName);
        expect(savedUser.email).to.equal(userData.email);
        expect(savedUser.commenting).to.equal(userData.commenting);
        expect(savedUser.isTeacher).to.equal(userData.isTeacher);
        expect(savedUser.darkTheme).to.equal(userData.darkTheme);
    });

    it("should fail if required fields are empty", async () => {
        const user = new User({ email: "test@example.com" });

        let err;
        try {
            await user.save();
        } catch (error) {
            err = error;
        }

        expect(err).to.exist;
        expect(err.errors.firstName).to.exist;
        expect(err.errors.lastName).to.exist;
        expect(err.errors.commenting).to.exist;
        expect(err.errors.isTeacher).to.exist;
        expect(err.errors.darkTheme).to.exist;
    });

    it("should fail if email is not unique", async () => {
        const userData = {
            firstName: "Jane",
            lastName: "Doe",
            email: "jane.doe@example.com",
            commenting: true,
            isTeacher: false,
            darkTheme: true,
        };

        await new User(userData).save();
        const duplicateUser = new User(userData);

        let err;
        try {
            await duplicateUser.save();
        } catch (error) {
            err = error;
        }

        expect(err).to.exist;
        expect(err.code).to.equal(11000); // MongoDB duplicate key error code
    });
});