
function SessionCreate() {
    return (
        <div className="row">
            <div className="col-12 col-md-6">
                <input type="text" className="w-100" />
            </div>

            <div className="col-12 col-md-6">
                <div className="float-end">
                    <span>00H00</span>
                    <button className="btn btn-info ms-3">Start</button>
                </div>
            </div>
        </div>
    );
}

export default SessionCreate;