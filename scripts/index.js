async function main () {
    const address = '0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0';
    const Box = await ethers.getContractFactory('Box');
    const box = await Box.attach(address);

    await box.store(23);

    const value = await box.retrieve();
    console.log('Box value is', value.toString());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
