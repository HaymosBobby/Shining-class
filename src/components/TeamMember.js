const TeamMember = ({ element }) => {
  return (
    <div className="team-member">
      <div className="image">
        <img src={element.imgLink} alt={element.name} />
      </div>
      <div className="information">
        <h4>{element.name}</h4>
        <h5>{element.position}</h5>
      </div>
    </div>
  );
};

export default TeamMember;
