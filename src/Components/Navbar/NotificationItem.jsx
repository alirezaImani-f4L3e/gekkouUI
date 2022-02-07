const NotificationItem = ({ link, alt, image, user }) => {
  return (
    <a href={link} className="dropdown-item">
      <div className="media">
        <img src={image} alt={alt} className="img-size-50 img-circle ml-3" />
        <div className="media-body">
          <h3 className="dropdown-item-title">
            {user}
            <span className="float-left text-sm text-muted">
              <i className="fa fa-star"></i>
            </span>
          </h3>
          <p className="text-sm">من پیامتو دریافت کردم</p>
          <p className="text-sm text-muted">
            <i className="fa fa-clock-o mr-1"></i> 4 ساعت قبل
          </p>
        </div>
      </div>
    </a>
  );
};

export default NotificationItem;
