const JsxFunctional = () => {
    const object = {
        name: "akii",
        age: 24
    }

    return (
        <div>
            <h4>{object.name}</h4>
            {object.age < 18 ? <h5>minor</h5> : <h5>major</h5>}
        </div>
    );
}

export default JsxFunctional;