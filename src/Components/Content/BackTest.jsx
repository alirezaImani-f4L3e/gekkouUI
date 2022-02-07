const Backtest = () => {
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2 d-flex flex-column">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Back test </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 content__main p-3">
        <h2>یک بسته دیتایی را انتخاب کنید :</h2>
        <div className="col-12 d-flex flex-column justify-content-center align-items-center">
          <button className="btn btn-block btn-outline-info btn__custom">
            انتخاب بسته دیتا{" "}
          </button>
        </div>
      </div>
      <div className="col-12 content__main__second p-3 d-flex flex-column flex-sm-row">
        <section className="col-6 d-flex flex-column justify-content-start">
          <h2>استراتژی</h2>
          <div class="form-group p-3">
            <label className="mb-3">استراتژی</label>
            <select class="form-control">
              <option>گزینه ۱</option>
              <option>گزینه ۲</option>
              <option>گزینه ۳</option>
              <option>گزینه ۴</option>
              <option>گزینه ۵</option>
            </select>
          </div>
          <section className="d-flex flex-row justify-content-between">
            <div class="form-group col-5">
              <label className="mb-3">اندازه کندل ها</label>
              <input type="text" className="form-control" value="1" />
            </div>
            <div class="form-group col-5 mt-1">
              <label className="mb-4"></label>
              <select class="form-control">
                <option>گزینه ۱</option>
                <option>گزینه ۲</option>
                <option>گزینه ۳</option>
                <option>گزینه ۴</option>
                <option>گزینه ۵</option>
              </select>
            </div>
          </section>
          <div class=" custom__height">
            <label className="mb-3">بازه ذخیره</label>
            <input type="text" className="form-control" value="10" />
          </div>
        </section>
        <section className="col-6 d-flex flex-column">
          <h2>پرامتر ها</h2>

          <div className="form-group">
            <label className="mb-3">پارامتر ها :</label>

            <textarea
              name="filters"
              id=""
              className="form-control"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Backtest;
