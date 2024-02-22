export default function TreatmentsItem({itemData}) {
    const {titleLv, titleEn, price} = itemData

    return (
<div className="treatments-item">
                    <div className="treatments-item__description">
                        <div className="treatments-item__left">
                            {titleLv}
                        </div>
                        <div className="treatments-item__right">
                            {titleEn}
                        </div>
                    </div>
                    <div className="treatments-item__price">
                        {price}
                    </div>
                </div>
    )
}